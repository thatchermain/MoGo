function showInfo () {
    console.log('akordeon');
    const labels = document.querySelectorAll('.main__label');
    const infos = document.querySelectorAll('.main__service-info');
    const arrows = document.querySelectorAll('.main__arrow');
    
    const clear = () => {
      infos.forEach(info => {
        info.classList.remove('active');
      })
    }
    
    labels.forEach(label => {
      label.addEventListener('click', (e) => {
        
        let panel = e.target.nextElementSibling;
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        }else{
            clear();
            panel.classList.add('active')
        }
      })
    })
}
    showInfo();
    
    export default showInfo