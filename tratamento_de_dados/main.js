const nameLocal = document.getElementById("name")
const ageLocal = document.getElementById("age")

const stringPessoas = "ana-15,joão-28,carlo-17,maria-50"
const listaPessoas = stringPessoas.split(",")

const response = []
for (let i = 0;i < listaPessoas.length; i++){
    let current = listaPessoas[i]
    let listValues = current.split("-")
    
    let name = listValues[0]
    let age = listValues[1]
    let obj = {
        name :name, age: age
    }
    response.push(obj)
}
nameLocal.innerHTML = response.map((obj) =>{
    return " " +obj.name
})
ageLocal.innerHTML = response.map((obj) => {
    return " "+ obj.age
})


