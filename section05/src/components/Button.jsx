const Button = ({text, color, children}) => {
  return <button style = {{color : color}}>    
    {text} - {color.toUpperCase()} 
    {children}
  </button>
};
//children 은 자식 컴포넌트를 가져오는 디스트럭쳐링
Button.defaultProps ={
  color: "black"
}
export default Button;