let srch = document.querySelector("#navbar #icon svg");
let search = document.getElementById("searchbar");

srch.onclick = () => {
    if(search.style.display === 'none'){
        search.style.display = 'block';
    }
    else{
        search.style.display = 'none';
    }
};
