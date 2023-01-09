const {postExam} = require('../../lib/services/exam.service') 
export default async function handler(req, res){
    switch(req.method){
        case 'GET':
            //
            break;
        case 'POST':
            await postExam(req.body)
            break; 
    }
}


