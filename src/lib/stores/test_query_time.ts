/* eslint-disable @typescript-eslint/no-unused-vars */
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { createClient } from '@supabase/supabase-js'
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";


const supabaseUrl = 'https://rfpxhwugjnqvpnqhhywv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcHhod3Vnam5xdnBucWhoeXd2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTE5OTkyNiwiZXhwIjoxOTk2Nzc1OTI2fQ.cjUOpZIbL0tZUGJGAERu95aceuK6OrB_97MeAzOE1OU'

const supabase = createClient(supabaseUrl, supabaseAnonKey);


console.time("sp_1")
const { data, error } = await supabase
.from("qa_documents")
.select("id, content")
.lt("id",3);
console.timeEnd("sp_1")



console.time("sp_2")
const { data:data2, error:error2 } = await supabase
.from("qa_documents")
.select("id, content")
.lt("id",3);
console.timeEnd("sp_2")


console.time("sp_3")
const { data:data3, error:error3 } = await supabase
.from("qa_documents")
.select("id")
.lt("id",3);
console.timeEnd("sp_3")


console.time("embedding")
const result = await fetch("https://api.openai.com/v1/embeddings", {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`
  },
  method: "POST",
  body: JSON.stringify({
    model: "text-embedding-ada-002",
    input: "我想要找一家星巴克"
  })
});

if (!result.ok) {
  const mess = await result.text();
  throw new Error(mess)
}
const json = await result.json();
const embedding = json.data[0].embedding;
console.timeEnd("embedding")


console.time("sp_111")
const { data: chunks, error: aerror } = await supabase
.rpc("qa_match_documents", {
  query_embedding: embedding,
  match_count: 3
});
console.timeEnd("sp_111")
// console.log({data:chunks, error:aerror})

console.time("sp_222")
const { data: chunks2, error: aerror2 } = await supabase
.rpc("qa_match_documents", {
  query_embedding: embedding,
  match_count: 3
});
console.timeEnd("sp_222")

console.time("sp_333")
const { data: chunks3, error: aerror3 } = await supabase
.rpc("qa_match_documents", {
  query_embedding: embedding,
  match_count: 3
});
console.timeEnd("sp_333")



const vectorStore = new SupabaseVectorStore(
  new OpenAIEmbeddings({openAIApiKey:"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"}),
  {
    client: supabase,
    tableName: "qa_documents",
    queryName: "qa_match_documents",
  }
);
console.time("langchain_vec1")
const resultForm = await vectorStore.similaritySearch("我想要找一家星巴克",3)
console.timeEnd("langchain_vec1")


console.time("langchain_vec2")
const resultForm2 = await vectorStore.similaritySearch("我想要找一家星巴克",3)
console.timeEnd("langchain_vec2")