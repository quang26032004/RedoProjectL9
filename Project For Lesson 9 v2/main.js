const dataHTML = document.querySelector('.data-content');

dataHTML.innerHTML = `Select a button to see the data`;

const BASE_API = 'https://jsonplaceholder.typicode.com';



const getUserAPI = async () => {
    const response = await fetch(`${BASE_API}/users`);
    const data = await response.json();
    return data;
    }

const getToDoAPI = async () => {
    const response = await fetch(`${BASE_API}/todos`);
    const data = await response.json();
    return data;
    }

const getPhotoAPI = async () => {
    const response = await fetch(`${BASE_API}/photos`);
    const data = await response.json();
    return data;
    }

const getAlbumAPI = async () => {
    const response = await fetch(`${BASE_API}/albums`);
    const data = await response.json();
    return data;
    }

const getPostAPI = async () => {
    const response = await fetch(`${BASE_API}/posts`);
    const data = await response.json();
    return data;
    }



function GetUser() {
    dataHTML.innerHTML = `Loading...`;

    getUserAPI().then(data => {
        dataHTML.innerHTML = `User data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        dataHTML.innerHTML = `Error: ${error}`;
    });
}

function GetToDo() {
    dataHTML.innerHTML = `Loading...`;

    getToDoAPI().then(data => {
        dataHTML.innerHTML = `To Do data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        dataHTML.innerHTML = `Error: ${error}`;
    });
}

function GetPhoto() {
    dataHTML.innerHTML = `Loading...`;

    getPhotoAPI().then(data => {
        dataHTML.innerHTML = `Photo data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        dataHTML.innerHTML = `Error: ${error}`;
    });
}

function GetAlbum() {
    dataHTML.innerHTML = `Loading...`;

    getAlbumAPI().then(data => {
        dataHTML.innerHTML = `Album data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        dataHTML.innerHTML = `Error: ${error}`;
    });
}

function GetPost() {
    dataHTML.innerHTML = `Loading...`;

    getPostAPI().then(data => {
        dataHTML.innerHTML = `Post data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        dataHTML.innerHTML = `Error: ${error}`;
    });
}



function createUserCard(item){
    return `
    <div class="card" border: 1px solid black>
       <h2>ID: ${item.id}</h2>
        <p>Name: ${item.name}</p>
        <p>Username: ${item.username}</p>
        <p>Email: ${item.email}</p>
        <p>Phone: ${item.phone}</p>
        <a class = "buttonViewDetail" onclick="ViewUserDetail(${JSON.stringify(item)})">View Detail</a>
    </div>
    `;
}

function createToDoCard(item){
    return `
    <div class="card">
        <h2>UserID: ${item.userId}</h2>
        <p>ID: ${item.id}</p>
        <p>Title: ${item.title}</p>
        <p>Completed: ${item.completed ? 'Done ' : 'Not'}</p>
        <a class = "buttonViewDetail" onclick="ViewToDoDetail(${JSON.stringify(item)})">View Detail</a>
    </div>
    `;
}

function createPhotoCard(item){
    return `
    <div class="card">
        <h2>Album ID: ${item.albumId}</h2>
        <p>ID: ${item.id}</p>
        <p>Title: ${item.title}</p>
        <p>URL: ${item.url}</p>
        <p>Thumbnail URL: ${item.thumbnailUrl}</p>
        <a class = "buttonViewDetail" onclick="ViewPhotoDetail(${JSON.stringify(item)})">View Detail</a>
    </div>
    `;
}

function createAlbumCard(item){
    return `
    <div class="card">
        <h2>User ID: ${item.userId}</h2>
        <p>ID: ${item.id}</p>
        <p>Title: ${item.title}</p>
        <a class = "buttonViewDetail" onclick="ViewAlbumDetail(${JSON.stringify(item)})">View Detail</a>
    </div>
    `;
}




function CreateUserCardList(dataUser){
    return `
    <div class="main-card">
        ${dataUser.map((item) => createUserCard(item)).join('')}
    </div>
    `;
}

function CreateToDoCardList(dataToDo){
    return `
    <div class="main-card">
        ${dataToDo.map((item) => createToDoCard(item)).join('')}
    </div>
    `;
}

function CreatePhotoCardList(dataPhoto){
    return `
    <div class="main-card">
        ${dataPhoto.map((item) => createPhotoCard(item)).join('')}
    </div>
    `;
}

function CreateAlbumCardList(dataAlbum){
    return `
    <div class="main-card">
        ${dataAlbum.map((item) => createAlbumCard(item)).join('')}
    </div>
    `;
}

function CreatePhotoCardList(dataPost){
    return `
    <div class="main-card">
        ${dataPost.map((item) => createPhotoCard(item)).join('')}
    </div>
    `;
}

