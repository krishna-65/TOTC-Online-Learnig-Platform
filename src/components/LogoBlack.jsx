

const LogoBlack = ({textColor})=>{
    console.log(textColor);
    return( 
                <p className={`h-[30px] w-[30px] border border-[rgb(52,52,52)]  rotate-45 relative`}><span className={`-rotate-45 bottom-2 text-lg absolute left-1 text-[#3a3838]  font-medium`}>TOTC</span></p>
    )
}
export default LogoBlack;