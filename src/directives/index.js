
const context = require.context('./global', false, /\.js$/);

const direativeAll = {
    install(Vue) {
        context.keys().forEach(path => {
            const item = context(path).default;
            Vue.directive(item.name,item.directive)
        })
    }
}
export default direativeAll