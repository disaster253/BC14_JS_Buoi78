
var arr = [];
document.getElementById("btnAddArray").addEventListener("click", addArray)
document.getElementById("btnConfirm").addEventListener("click", function () {
	var featuresOpt = document.getElementById("features")
	var selectedValue = featuresOpt.value;
	if (selectedValue == "chucnang1") {
		sumPositiveNum(arr);
	} else if (selectedValue == "chucnang2") {
		countPositiveNum(arr);
	} else if (selectedValue == "chucnang3") {
		findMinNum(arr);
	} else if (selectedValue == "chucnang4") {
		finMinPositiveNum(arr);
	} else if (selectedValue == "chucnang5") {
		findEvenLastNum(arr);
	} else if (selectedValue == "chucnang6") {
		$('<input type ="text" id ="swapNum1" class ="form-control mt-2" placeholder = "Nhập vào vị trí muốn đổi"/> ').appendTo("#result")
		$('<input type ="text" id ="swapNum2" class ="form-control mt-2" placeholder = "Nhập vào vị trí muốn đổi"/> ').appendTo("#result")
		$('<button class="btn btn-success mt-2" id="swapButton">Đổi vị trí</button>').appendTo("#result")
		$('<h3 id = "result-swap"></h3>').appendTo("#result")
		document.getElementById("swapButton").addEventListener("click", function () {
			var indexA = +document.getElementById("swapNum1").value;
			var indexB = +document.getElementById("swapNum2").value;
			var temp = "";
			temp = arr[indexA];
			arr[indexA] = arr[indexB];
			arr[indexB] = temp;
			document.getElementById("result-swap").innerHTML = `Mảng sau khi đổi vị trí là: [${arr}]`
		})
	} else if (selectedValue == "chucnang7") {
		sortedArray(arr)
		document.getElementById("result-features").innerHTML = `Mảng sau khi sort là: [${arr}]`
	} else if (selectedValue == "chucnang8") {
		var firstPrime = findFirstPrimeNumber(arr)
		if (firstPrime) {
			document.getElementById("result-features").innerHTML = `Số nguyên tố đầu tiên trong mảng là ${firstPrime}`
		} else {
			document.getElementById("result-features").innerHTML = `Không có số nguyên tố trong mảng.`
		}
	} else if (selectedValue == "chucnang10") {
		compareNum(arr);
	}
})

// sau khi click button sẽ clear ô input
function clearInput() {
	$('button').click(function () {
		$('input[type="text"]').val("");
	});
}
//Thêm số vào mảng từ ô input
function addArray() {
	var arrNum = +document.getElementById("num").value;
	arr.push(arrNum);
	clearInput();
	showArrayCurrent(arr);
}
//show mảng lên màn hình
function showArrayCurrent(a) {
	var html = "";
	for (var i = 0; i < a.length; i++) {
		html += a[i] + ", ";
	}
	document.getElementById("array-current").innerHTML = `Mảng hiện tại là: [${html}]`
}
// Tổng các số dương trong mảng
function sumPositiveNum(a) {
	var sum = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			sum += a[i];
			document.getElementById("result-features").innerHTML = `Tổng các số dương trong mảng là: ${sum}`
		} else {
			document.getElementById("result-features").innerHTML = "Mảng không có số dương"
		}
	}
}
//Đếm số dương trong mảng
function countPositiveNum(a) {
	var countPositive = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			countPositive++;
			document.getElementById("result-features").innerHTML = `Số dương trong mảng hiện tại là: ${countPositive}`
		} else {
			document.getElementById("result-features").innerHTML = "Mảng không có số dương"
		}
	}

}
//Tìm số nhỏ nhất trong mảng
function findMinNum(a) {
	var min = a[0];
	for (var i = 0; i < a.length; i++) {
		if (a[i] <= min) {
			min = a[i];
		}
	}
	document.getElementById("result-features").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`
}
// Tìm số dương nhỏ nhất trong mảng
function finMinPositiveNum(a) {
	var posNum
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			posNum = a[i]
			break;
		}
	}
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0 && a[i] < posNum) {
			posNum = a[i]
		}
	}
	document.getElementById("result-features").innerHTML = `Số dương nhỏ nhất trong mảng là: ${posNum}`
}
// tìm số chẵn cuối cùng trong mảng
function findEvenLastNum(a) {
	var num = -1
	for (var i = 0; i < a.length; i++) {
		if (a[i] % 2 == 0 && a[i] > 0) {
			num = a[i]
		}
	}
	document.getElementById("result-features").innerHTML = `Số chẵn cuối cùng trong mảng là: ${num}`
}
// function swapNumber(a) {

// }
//Sắp xếp mảng theo thứ tự tăng dần
function sortedArray(a) {
	a.sort(function (a, b) {
		return a - b;
	})
}
//Kiểm tra số nguyên tố
function checkPrime(n) {
	if (n < 2) {
		return false
	}
	for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
//Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrimeNumber(a) {
	var prime = a.find(function (value, index) {
		return checkPrime(value);
	})
	return prime;
}
//So sánh số dương và số âm
function compareNum(a) {
	countNegative = 0;
	countPositive = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			countPositive++;
		} else if (a[i] < 0) {
			countNegative++;
		}
	}
	if (countNegative > countPositiveNum) {
		document.getElementById("result-features").innerHTML = `Mảng có số âm là: ${countNegative} nhiều hơn số dương là: ${countPositive}`
	} else if (countNegative < countPositive) {
		document.getElementById("result-features").innerHTML = `Mảng có số dương là: ${countPositive} nhiều hơn số âm là: ${countNegative}`
	} else {
		document.getElementById("result-features").innerHTML = `Mảng có số dương là: ${countPositive} bằng số âm là: ${countNegative}`
	}
}
