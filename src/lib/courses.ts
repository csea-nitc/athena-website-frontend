import { Course, Review } from '@/types/backend';
import { CoursesData, ReviewsData } from '@/types/frontend';
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL


const getCourses = async (): Promise<CoursesData> => {
    const response = await axios.get<Course>(`${backendUrl}/api/courses`);

    const formattedData: CoursesData = response.data.data.map((course) => ({
        courseId: course.courseId,
        courseTitle: course.courseTitle,
        reviewCount: course.reviewCount,
    }))

    return formattedData;
}

const getReviews = async (courseId?: string): Promise<ReviewsData> => {
    if (courseId) {
        const response = await axios.get<Course>(`${backendUrl}/api/courses`, {
            params: { 'filters[courseId]': courseId }
        });

        console.log(response.data.data);
        const courseReviews = response.data.data[0].course_reviews!;
        const formattedData: ReviewsData = courseReviews.map((review, index) => ({
            semester: review.reviewed_in_sem.semesterName,
            index: index + 1,
            totalReviews: courseReviews.length,
            review: review.reviewText,
            rating: review.courseRating,
        }));

        return formattedData;
    }
    else {
        const response = await axios.get<Review>(`${backendUrl}/api/course-reviews`);
        const formattedData: ReviewsData = response.data.data.map((review, index) => ({
            semester: review.reviewed_in_sem.semesterName,
            index: -1,
            totalReviews: -1,
            review: review.reviewText,
            rating: review.courseRating,
        }));

        return formattedData;
    }
}

export {
    getReviews,
    getCourses,
}