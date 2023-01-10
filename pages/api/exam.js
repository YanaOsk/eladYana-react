const {postExam,deleteExamFromDb} = require('../../lib/services/exam.service') 


export default async function handler(req, res){
    console.log("REQ BODY ",req.body);
    console.log('req query', req.query)
    switch(req.method){
        
        case 'GET':
            //
            break;
        case 'POST':
            await postExam(req.body)
            break; 
        case 'DELETE':
            await deleteExamFromDb(req.query)
            break;
                
        
            
    }
}


