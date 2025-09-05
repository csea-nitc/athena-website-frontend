import { CardProps } from "@/components/Card"
import { CourseCardProps } from "@/components/CourseCard"
import { ReviewCardProps } from "@/components/ReviewCard"

export type BatchData = {
    batch: string,
    admins: CardProps[],
}

export type AdminData = {
    currentAdmins: BatchData[],
    previousAdmins: BatchData[],
}

export type FacultyData = {
    previousFaculties: CardProps[],
    currentFaculties: CardProps[],
}

export type WebTeamData = {
    design: CardProps[],
    juniors: CardProps[],
    seniors: CardProps[],
}

export type StaffData = CardProps[]

export type CoursesData = CourseCardProps[]

export type ReviewsData = ReviewCardProps[]

export enum Teams {
    faculty = "Faculty",
    staff = "Staff",
    admins = "Student Admins",
    webteam = "Web Team",
}

export const groups = [
    Teams.faculty,
    Teams.staff,
    Teams.admins,
    // Teams.webteam
]