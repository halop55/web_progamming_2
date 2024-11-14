const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');
exports.list_all_words = (req, res)=>{
    Vocab.find({}, (err, words)=> {
        if (err)
            res.send(err);
        res.json(words);
    });
};
exports.create_a_word = (req,res)=> {
    const new_Word = new Vocab(req.body);
    console.log(new_Word)
    new_Word.save((err, word)=> {
        if (err)
            res.send(err);
        res.json(word);
    });
};


exports.read_a_word = function(req,res){
    Vocab.findById(req.params.wordId, (err, word)=>{
        if (err)
            res.send(err);
        res.json(word);
    });
};

exports.update_a_word = (req, res)=> {
    Vocab.findOneAndRemove(
        {_id: req.params.wordId}
        , req.body,
         {new: true},
          (err,word)=> {
        if (err)
            res.send(err);
        res.json(word);
    });
};
exports.delete_a_word = (req, res)=> {
    Vocab.deleteOne({
         _id: req.params.wordId},
         err => {
        if(err)
            res.send(err);
        res.json({ message: 'Word successfully deleted',_id: req.params.wordId});
    });
};