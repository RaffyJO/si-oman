function Button({
    children,
    onClick,
    className,
}) {
    return (
        <button
            onClick={onClick}
            className={`${className} bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded w-28`}
        >
            {children}
        </button>
    )
}

export default Button