import { inter } from "@/fonts";
import Image from "next/image";

/**
 * Cards for the Course Review page
 * @param {string} [props.semester] - Semester
 * @param {number} [props.index] - index of the review
 * @param {number} [props.totalReviews] - Count of all the Reviews
 * @param {string} [props.review] - Review
 * @param {number} [props.rating] - Rating out of 5
 *
 * @author Naila Fathima
 */

const ReviewCard = ({
    semester,
    index,
    totalReviews,
    review,
    rating,
}: ReviewCardProps): JSX.Element => {

    return (
        <div className="content-center w-full py-[24px] px-[14px] rounded-[12px] bg-[#E5E5E5]">
            <div className="flex flex-row justify-between items-center">
                <h2 className={`${inter.className} text-[20px] font-bold text-black opacity-90 leading-[19.36px]`}>
                    {semester}
                </h2>

                <p className="text-[12px] font-bold text-black opacity-45">
                    {index}/{totalReviews}
                </p>
            </div>
            <div className="flex flex-row pt-1 gap-0">
                {Array.from({ length: rating }, (_, index) => (
                    <Image
                        key={index}
                        src="/ReviewCard/star.svg"
                        alt="star"
                        className="w-[12px] h-[12px]"
                        width={250}
                        height={250}
                    />
                ))}
            </div>


            <div className="pt-4">
                <p className="text-base font-medium text-[#0E0E10] opacity-75">
                    {review}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
export interface ReviewCardProps {
    semester: string;
    index: number;
    totalReviews: number;
    review: string;
    rating: number;
}
