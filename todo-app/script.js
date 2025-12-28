// 1. Tangkap Elemen HTML
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const countSpan = document.getElementById('count');

// 2. Load Data dari LocalStorage (Biar gak hilang pas refresh)
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 3. Fungsi Simpan ke Memory Browser
function saveLocal() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 4. Fungsi Render (Menampilkan Data ke Layar)
function render() {
    list.innerHTML = ""; // Bersihkan layar dulu

    // Cek kalau kosong
    if (todos.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    // Loop data dan buat HTML
    // Kita reverse() biar yg baru ada di atas
    todos.slice().reverse().forEach((item) => {
        // Cari index asli karena kita pake reverse
        const realIndex = todos.indexOf(item); 
        
        const li = document.createElement('li');
        if (item.completed) li.classList.add('completed');

        li.innerHTML = `
            <button class="action-btn check-btn" onclick="toggleTask(${realIndex})">
                <i class="fas ${item.completed ? 'fa-check-circle' : 'fa-circle'}"></i>
            </button>
            
            <div class="task-details" onclick="toggleTask(${realIndex})">
                <span class="task-text">${item.text}</span>
                <span class="task-time">🕒 ${item.time}</span>
            </div>

            <button class="action-btn delete-btn" onclick="deleteTask(${realIndex})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        list.appendChild(li);
    });

    // Update angka sisa tugas
    const sisa = todos.filter(t => !t.completed).length;
    countSpan.innerText = sisa;
}

// 5. Fungsi Tambah Tugas
function addTask() {
    const text = input.value.trim();
    
    if (text === "") {
        alert("Eits, tulis dulu tugasnya! 😅");
        return;
    }

    const newTask = {
        text: text,
        completed: false,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) // Jam otomatis
    };

    todos.push(newTask);
    saveLocal();
    render();
    input.value = ""; // Kosongkan input
    input.focus();
}

// 6. Fungsi Hapus
window.deleteTask = function(index) {
    todos.splice(index, 1);
    saveLocal();
    render();
}

// 7. Fungsi Centang Selesai
window.toggleTask = function(index) {
    todos[index].completed = !todos[index].completed;
    saveLocal();
    render();
}

// 8. Fungsi Bersihkan Semua
window.clearAll = function() {
    if(confirm("Yakin mau hapus semua sejarah perjuangan ini? 😱")) {
        todos = [];
        saveLocal();
        render();
    }
}

// Event Listeners (Biar tombol berfungsi)
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

// Render pertama kali saat web dibuka
render();