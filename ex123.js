// 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
var str = "abcdef"; // Chuyển chuỗi thành mảng các ký tự
var charArray = str.split(''); // Đảo ngược thứ tự các ký tự trong mảng
charArray.reverse(); // Chuyển lại mảng thành chuỗi
var reversedString = charArray.join('');
// console.log(reversedString); // Ouput: "fedcba"

// 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
       } //kiểm tra xem giá trị hiện tại của phần tử arr[i] có tồn tại trong mảng newArr hay không. Nếu giá trị này không tồn tại trong mảng newArr (tức là indexOf trả về giá trị -1), thì chúng ta sẽ thêm giá trị này vào mảng newArr bằng câu lệnh newArr.push(arr[i]).
    }
    return newArr
}
// console.log(unique([1, 2, 3, 5, 4, 2, 6, 4])) // Output: [1, 2, 3, 5, 4, 6]

// 3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
function findMostFrequent(arr) {
    var frequency = {};
    
// Tính số lần xuất hiện của mỗi phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] === undefined) {
        frequency[arr[i]] = 1;
        } else {
        frequency[arr[i]]++;
        }
    }
    var mostFrequent = arr[0];
    var count = frequency[arr[0]];
// Tìm phần tử xuất hiện nhiều nhất trong mảng
    for (var i in frequency) {
        if (frequency[i] > count) {
        mostFrequent = i;
        count = frequency[i];
        }
    }
// Trả về phần tử xuất hiện nhiều nhất và số lần xuất hiện của nó trong mảng
    return { value: mostFrequent, count: count };
}
var arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
var result = findMostFrequent(arr);
// console.log(result); // Output: {value: 3, count: 3}

// 4. Viết một ứng dụng web danh bạ có giao diện và yêu cầu như sau
// ở ex4