const phoneBook = 
localStorage.getItem('phoneBook') ? 
JSON.parse(localStorage.getItem('phoneBook')) : []; // kiểm tra trong localStorage có trong phoneBook hay không, nếu có thì pass nó ra, còn không thì để rỗng
// const initHuman={
//     name: 'Alice',
//     phoneNumber: '(816)-403-5456'
// };
// // phoneBook.push(initHuman);
// // dòng dữ liệu là chữ + số -> object
// for (let i=0; i<10; i++) {
//     phoneBook.push(initHuman);
// }
// console.log (phoneBook);

// DOM
const crrUlListView = document.querySelector('ul.list-view');
                    // mảng hiển thị giao diện
const viewPhoneBook = (listView) => {
    crrUlListView.innerHTML = ''; // mặc định bên trong thẻ ul ở htlm rỗng hết
    // console.log(listView);

//chức năng sắp xếp         hàm sort cũng làm thay đổi mảng ban đầu
    listView.sort((a,b) => {
        const charA = a.name.toUpperCase();
        const charB = b.name.toUpperCase();
        if (charA > charB) {
            return 1
        }
        if (charA < charB) {
            return -1
        }
        return 0;
    });

    listView.forEach(element => {
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        const spanPhoneNumber = document.createElement('span');

        spanName.innerText = element.name;
        spanPhoneNumber.innerText = element.phoneNumber;

        li.appendChild(spanName);
        li.appendChild(spanPhoneNumber);

        // console.log(li);
        crrUlListView.appendChild(li);
    }); //duyệt qua tất cả các phần tử của mảng, không có ngừng nên không dùng for như bình thường
}
viewPhoneBook(phoneBook);

//chức năng thêm
//DOM
const formAdd = document.querySelector('form.form-add');
formAdd.addEventListener('submit', (e) =>{ 
    e.preventDefault(); // reset lại tất cả các sự kiện liên quan đến submit mà không reload
    // console.log(e.target['name'].value); //truyền biến vào trong => value lấy được output
    const newFriend = {
        name: e.target['name'].value,
        phoneNumber: e.target['phoneNumber'].value,
    };
    // console.log(newFriend);
    phoneBook.push (newFriend);
    e.target['name'].value = ''; // cho rỗng để không hiện dũ liệu đã nhập
    e.target['phoneNumber'].value = '', // cho rỗng để không hiện dũ liệu đã nhập
    // console.log(phoneBook); // không hiển thị và đọc dữ liệu mới
    viewPhoneBook(phoneBook); // bát buộc đọc dữ liệu mới nhưng bị lưu lại các dữ liệu trước đó đã nhập vào => xóa đi giao diện hiện tại và làm lại từ đầu, mỗi khi view phoneBook lên thì xóa rỗng đi, dòng 17
    localStorage.setItem('phoneBook',JSON.stringify(phoneBook)); // giữ dữ liệu nhập vào, load lại thì không bị mất
});

//chức năng tìm kiếm 
//DOM
const formFindel = document.querySelector ('form.form-find-delete') 
formFindel.onsubmit = (e) => {
    e.preventDefault(); //reset lại tất cả các sự kiện liên quan đến submit mà không reload, onsubmit viết thường
}
const findByNameOrByPhoneNumber = (char,crrUlListView) => {
    const listViewFind = crrUlListView.filter((item) => {
        return item.name.toUpperCase().includes(char.toUpperCase()) || item.phoneNumber.includes(char);
    });
    viewPhoneBook(listViewFind);
};
 //DOM
const btnFind = document.querySelector('button.btn-find');
const btnDel = document.querySelector('button.btn-del');
//add sự kiện
btnFind.addEventListener('click', () => {
    // formFindel['searchValue'].value => là lấy giá trị nhập ở ô tìm kiếm được => gọi hàm
    findByNameOrByPhoneNumber(formFindel['searchValue'].value, phoneBook);
});

//Chức năng xóa trùng
const deleteSamePhone = (listFriendPhone) => {
    listFriendPhone.forEach ((item,index) => {
        for (let i = 0; i < listFriendPhone.length - 1; i++) {
            for (let j = i + 1; j < listFriendPhone.length; j++) {
                if(listFriendPhone[j].phoneNumber === listFriendPhone[i].phoneNumber) {
                    listFriendPhone.splice(j, 1); // làm thay đổi mảng ban đầu, kết quả đầu ra của splice -> mảng chứa phần tử xóa
                }
            }
        }
    });
    localStorage.setItem('phoneBook',JSON.stringify(listFriendPhone)); //sau khi xóa trùng sẽ giữ nguyên chứ không reload dữ liệu trùng ban đầu
    viewPhoneBook(listFriendPhone);
};
//add sự kiệN
btnDel.addEventListener ('click',() => {
    deleteSamePhone(phoneBook);
});