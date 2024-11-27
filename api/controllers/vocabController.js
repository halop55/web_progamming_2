const mongoose = require('mongoose');// khai báo kết nối mongoose
const Vocab = mongoose.model('Vocab');


exports.list_all_words = (req, res)=>{
    Vocab.find({}, (err, words)=> { //Tìm tất cả các từ trong bộ sưu tập
        if (err)
            res.send(err);// send error to cilent when it have problem when searching
        res.json(words);
    });
};
// find word by id
exports.create_a_word = (req,res)=> {
    const new_Word = new Vocab(req.body);
    console.log(new_Word)
    new_Word.save((err, word)=> {
        if (err)
            res.send(err);
        res.json(word);
    });
};

// read word by id
exports.read_a_word = function(req,res){
    Vocab.findById(req.params.wordId, (err, word)=>{
        if (err)
            res.send(err);
        res.json(word);
    });
};

// exports.update_a_word = (req, res)=> {
//     Vocab.findOneAndUpdate(
//         {_id: req.params.wordId}, 
//         req.body,
//         {new: true},
//         (err, word)=> {
//         if (err) 
//             res.send(err);
//         res.json(word);
//     });
// };

// find word by id and update word 
exports.update_a_word = function (req, res) {
    Vocab.findOneAndUpdate(
        { _id: req.params.wordId },
        req.body, { new: true },
        function (err, word) {
            if (err)
                res.send(err);
            res.json(word);
    });
};
// delete word  by id
exports.delete_a_word = (req, res)=> {
    Vocab.deleteOne({
        _id: req.params.wordId},
        err => {
        if(err)
            res.send(err);
        res.json({ message: 'Word successfully deleted',_id: req.params.wordId});
    });
};
//
exports.search_a_word = function (req, res) {
    const searchTerm = req.query.q;
    Vocab.find({
        $or: [ {english: new RegExp(searchTerm,'i')},
            {german: new RegExp(searchTerm,'i')},
            {japan: new RegExp(searchTerm,'i')}
        ]

    }, (err, words)=> { //Tìm tất cả các từ trong bộ sưu tập
        if (err){
            console.error(err)
            res.send(err);
        } else if(!words.length){
            console.log('Not found');
            res.status(404).send("Not found")
        }else {
            console.log('Found words:',words)
            res.json(words);

        }
    });
};