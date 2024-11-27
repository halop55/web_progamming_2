//Dòng này import module vocabController từ thư mục controllers
//Module này chứa các hàm xử lý logic (controller functions bao gồm 
//CRUD (Create, Read, Update, Delete)
    const vocabBuilder = require('../controllers/vocabController');
    module.exports = app => { //Xuất một hàm nhận đối tượng app làm tham số. app
    //todoList Routes
    app.route('/halh')
    app.route('/search')
        .get(vocabBuilder.search_a_word);
    app
        //  .get(vocabBuilder.search_a_word) // search

        .route('/words')//Định nghĩa một route cho đường dẫn /words

        .get(vocabBuilder.list_all_words)//Khi có request GET đến /words thì chạy hàm list_all_words để liệt kê tất cả giá trị bao gồm các từ vụng  

        .post(vocabBuilder.create_a_word);// khi có request đến POST thì gọi hàm create_a_word để tạo ra từ mới
    app.route('/words/:wordId')////Định nghĩa một route cho đường dẫn /words/ id của dữ liệu

        .get(vocabBuilder.read_a_word)// khi có request đến GET thì gọi hàm read a word để đọc và được dựa trên ID


        .put(vocabBuilder.update_a_word) //Khi có request PUT đến /words/:wordId thì gọi hàm update dựa trên ID
        .delete(vocabBuilder.delete_a_word);
        //Khi có request DELETE đến /words/:wordId  gọi hàm delete_a_word trong vocabController sau đó xóa dựa trên ID
}










