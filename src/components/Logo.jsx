

const Logo = ({textColor})=>{
    console.log(textColor);
    return( 
                <p className={`h-[30px] w-[30px] border   rotate-45 relative`}><span className={`-rotate-45 bottom-2 text-lg absolute left-1 text-${textColor} font-medium`}>TOTC</span></p>
    )
}
export default Logo;