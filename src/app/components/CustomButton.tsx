interface Project {
    description: string;
    style?: string
}

const CustomButton = ({ description, style }: Project) => {
    return(
        <button
            className={`rounded-2xl px-5 py-1 ${style ? style : ''}`}
        >
            {description}
        </button>
    )
}

export default CustomButton;