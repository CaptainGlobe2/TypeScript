let weight : number & string;//technically it's not possible

type Draggable = {
    drag: ()=> void
};
type Resizable = {
    resize: ()=> void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag:()=>{},
    resize:()=>{}
}