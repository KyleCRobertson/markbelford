function scrollTo(elementRef){
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    });
}
export default scrollTo;