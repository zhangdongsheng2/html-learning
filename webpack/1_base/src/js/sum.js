export default function (...args){
    return args.reduce((a,b) => a+b,0)
}


export const sum = (...args) => {
    return args.reduce((p, c) => p + c, 0);
};

