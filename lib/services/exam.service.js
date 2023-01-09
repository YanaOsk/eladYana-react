const {getCollection} = require('../dbFunctions/connectToDB')

async function postExam(exam){
    // console.log("exam ",exam);
    const exams = await getCollection('exam');
    console.log("exams ",exams);
    await exams.insertOne(exam);
    }
module.exports={
    postExam
}