const directive ={
    bind() {
        // var permissionArray = ['add','delete']
        // if (!permissionArray.includes(binding.value)) {
            // console.log(binding.value)
            // console.log(el.parentNode)
        // }
    },
    inserted(el,binding) {
        var permissionArray = ['add','edit','delete']
        if (!permissionArray.includes(binding.value)) {
            el.parentNode.removeChild(el);
        }
    }
}
export default {
    name: 'has',
    directive
}