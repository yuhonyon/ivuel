const getReference = (el, binding, vnode) => {
    const _ref = binding.expression ? binding.value : binding.arg;
    let popper = vnode.context.$refs[_ref];
    if (popper) {
        if (Array.isArray(popper)) {
            popper=popper[0];
        }
        let parentNode=popper.$refs.reference.parentNode;
        if(popper.transfer){
            parentNode.parentNode.removeChild(parentNode);
        }else{
            parentNode.removeChild(popper.$refs.reference);
        }
        popper.$refs.reference = el;
    }
};

export default {
    bind(el, binding, vnode) {
        getReference(el, binding, vnode);
    },
    inserted(el, binding, vnode) {
        getReference(el, binding, vnode);
    }
};
