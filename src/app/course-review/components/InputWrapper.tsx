import { CourseCardProps } from "@/components/CourseCard";
import Input from "@/components/Input";
import Fuse from "fuse.js";
import { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useCallback, useMemo, useRef, useState } from "react";

const InputWrapper = ({
    allCourses,
    setFilteredCourses
}: InputWrapperProps) => {
    const [input, setInput] = useState<string>("");
    const fuseOptions = useMemo(() => ({
        keys: ['courseId', 'courseTitle'],
        threshold: 0.3,
    }), []);

    const fuseRef = useMemo(() =>
        new Fuse(allCourses, fuseOptions)
        , [allCourses, fuseOptions]);

    const changeHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        if (inputValue.trim() === "") {
            setFilteredCourses(allCourses)
        }
        else {
            const results = fuseRef.search(inputValue);
            setFilteredCourses(results.map(res => res.item))
        }
    }, [fuseRef, allCourses, setFilteredCourses]);

    const submitHandler: FormEventHandler = useCallback((e) => {
        e.preventDefault();
    }, []);




    return (
        <Input
            placeholder="Search Course"
            onChange={changeHandler}
            onSubmit={submitHandler}
            value={input}
            id="search-courses"
            name="search"
        />
    )
}

export default InputWrapper;

interface InputWrapperProps {
    allCourses: CourseCardProps[],
    setFilteredCourses: Dispatch<SetStateAction<CourseCardProps[]>>
}