const directive = {
    bind() {
    },
    inserted(el) {
        el.focus()
    }
}
export default {
    name: "focus",
    directive
}