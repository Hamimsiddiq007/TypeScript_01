function getTea(kind: string | number){
    if (typeof kind === "string") {
        return `You ordered a cup of ${kind} tea.`;
    }
    return `Tea order: ${kind} cups`;
}

function serveTea(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala tea`;
}

function orderTea(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `You ordered a small cup of tea.`
    }
    if(size === "medium" || size === "large"){
        return `Make extra tea`
    }
    return `Tea order: ${size} cups`;
}

class greenTea{
    serve(){
        return `Serving green tea`
    }
}
class orangeTea{
    serve(){
        return `Serving orange tea`
    }
}

function serve(tea: greenTea | orangeTea){
    if(tea instanceof greenTea){
        return tea.serve()
    }
    return tea.serve()
}

type teaOrder = {
    type: string;
    sugar: number;
}

function isTeaOrder(obj:any):obj is teaOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(itme: teaOrder | string){
    if(isTeaOrder(itme)){
        return `Serving ${itme.type} tea with ${itme.sugar} sugar`
    }
    return `Serving custom ${itme} tea`
}

type masalatea = {type: "masala", spice: number};
type milktea = {type: "milk", amount: number};
type gingertea = {type: "ginger", aroma: number};

type  tea = masalatea | milktea | gingertea;

function makeTea(order: tea){
    switch (order.type) {
        case "masala":
            return `Serving masala tea with ${order.spice} spices`;
            break;
        case "milk":
            return `Serving milk tea with ${order.amount} spices`;
            break;
        case "ginger":
            return `Serving ginger tea with ${order.aroma} spices`;
            break;
    }
}

function isStringArray(arr: unknown): arr is string[]{
    return (
        Array.isArray(arr) &&
        arr.every(item => typeof item === "string")
    )
}