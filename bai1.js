const students = [
    { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
    { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
    { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
    { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
    { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
    { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
    { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
    { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
    { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
    { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
    { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
    { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
    { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
    { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
    { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
    { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
    { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
    { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
    { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 }
];
// Yc 1:
students.forEach((student) => {
  console.log(
    `
    ID : ${student.id}
    Tên: ${student.name}
    Tuổi : ${student.age}
    Điểm : ${student.score}
    --------------------------
   `
  );
})
//Yc 2:
function isPassed(score) {
  if (score >= 5) {
    return "Đạt";
  } else {
    return "Ko đạt";
  }
}
    students.forEach((student) => {
    console.log(`${student.name}: ${isPassed(student.score)}`);
});
    console.log('\n');
// Yc 3 :
    const passedStudents = students.filter(student => student.score >= 5);
    console.log('Danh sách sinh viên đạt:');
    console.log(passedStudents);
    console.log('\n');
// Yc 4 :
    const failedStudents = students.filter(student =>student.score < 5);
    console.log('Danh sách sinh viên k đạt:');
    failedStudents.forEach(student => {
    console.log(`${student.name} - ${student.score} điểm `);
});
    console.log('\n');
//Yc5:
    const lonhon21 = students.filter(student=>student.age >=21);
    console.log('Sv có tuổi >21 :');
    lonhon21.forEach(student => {
    console.log(`${student.name}-${student.age}`);
});
    console.log('\n');
//Yc6:
    const SVDiemCao = students.filter(student => student.score >= 8);
    const ThongTin = SVDiemCao.map(student => `${student.name} - Học sinh giỏi`);
    console.log('SV giỏi :');
    console.log(ThongTin);
    console.log('\n');
//Yc7:
    const getClassification = (score) => {
    if (score >= 8) {
        return "Giỏi";
    } else if (score >= 6.5) {
        return "Khá";
    } else if (score >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
};
    const PhanLoai = students.map(student => `${student.name} - ${getClassification(student.score)}`);
    console.log('Phân loại SV:');
    console.log(PhanLoai);
    console.log('\n');
//Yc8:
    const result = students.filter(student => student.score >= 6.5).map(student => `${student.name} - ${student.score} điểm`);
    console.log('sv>=6.5:');
    console.log(result);