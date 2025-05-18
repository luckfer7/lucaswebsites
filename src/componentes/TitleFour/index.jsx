export default function TitleFour({ children, className, ...props }) {
    return(
        <h4 className={` font-Raleway ${className}` } {...props}>{children}</h4>
    )
}