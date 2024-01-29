var searchValues=[
    "Happy Diwali!!",
    "It's Javascript Page",
    "How to create website?",
    "How to use JS",
    "What is JavaScript",
    "what's upp",
    "Why?"
]
var searchText=document.querySelector("#searchText")
var list=document.querySelector("#list")

searchText.addEventListener("keydown",function(){
    var rsult=[]
    if(searchText.value){
        result=searchValues.filter(function(keyword){
            return keyword.toLowerCase().includes(searchText.value.toLowerCase())
        })
    }
    console.log(result)
    var content=" "
    result.forEach(function(element){
        var temp="<li>"+element+"</li>"
        content=content+temp;
    })
    list.innerHTML=content
})
function display(element){
    searchText.value=element.innerText
    list.innerHTML=''
}