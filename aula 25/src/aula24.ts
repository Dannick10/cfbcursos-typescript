interface curso{
    titulo:string;
    des:string;
}

interface cursoProg extends curso{
    aulas:number;
    maxAlunos?:number;
    algoritimo:boolean;
}

interface cursoArtes extends curso{
    aulas:number;
    maxAlunos?:number;
    artes:boolean
}



let cursoProg={titulo:'typescript',des:'curso',aulas:5,maxAlunos: 5,algoritimo:true}
let cursoArtes={titulo:'typescript',des:'curso',aulas:5,maxAlunos: 5,artes:true}

console.log(cursoProg)
console.log(cursoArtes)