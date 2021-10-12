document.addEventListener('DOMContentLoaded', function (){
    const scroller = new Scroller('#root')
    console.log(scroller)

    document.addEventListener('mousewheel', scroller.listenScroll)
        
       
    })
    // function scroll(direction){
    //     if(direction === 1){
    //         const isLastSection = currentSectionIndex === sections.length -1; 
    //         if(isLastSection)return;
    //     }else if (direction === -1){
    //         const firstSection = currentSectionIndex === 0;
    //         if(firstSection)return;
    //     }

    //     currentSectionIndex = currentSectionIndex + direction;
    //     scrollToCurrentSection();
    // }
    // function scrollToCurrentSection() {
    //      sections[currentSectionIndex].scrollIntoView({
    //         behaviour: 'smooth',
    //         block:'start',
    //     })
    // }
