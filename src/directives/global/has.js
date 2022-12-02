const directive ={
    bind() {
    },
    inserted(el,binding) {
        const permissionArray = JSON.parse(localStorage.getItem('permissionArray'));
        if (permissionArray&&!permissionArray.includes(binding.value)) {
            el.parentNode.removeChild(el);
        }
    }
}
export default {
    name: 'has',
    directive
}