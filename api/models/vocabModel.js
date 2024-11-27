const mongoose = require('mongoose');// khai báo kết nối mongoose
const Schema = mongoose.Schema;//: Dòng này khai báo biến Schema để sử dụng các schema (cấu trúc) của Mongoose.

const VocabSchema = new Schema({//schema giúp xác định các trường dữ liệu (fields) và các loại dữ liệu (data types) mà mỗi tài liệu sẽ chứa,
    //Định nghĩa một Schema mới cho từ vựng với hai trường dữ liệu
    english: {// fields english
        type: String,
        required: 'English word cannot be blank '

    },
    german:{// fields german
        type:String,
        required: 'German word cannot be blank '    },

    japan:{// fields 
        type:String,  },
    
}, {collection:'vocab'}
);
module.exports = mongoose.model('Vocab',VocabSchema);