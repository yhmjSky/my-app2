// import "./file/sum.wasm"
import { encoding_for_model} from "@dqbd/tiktoken"

// import GPT3Tokenizer from 'gpt3-tokenizer';
// const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
// export function getTokens(input: string): number {
//   const tokens = tokenizer.encode(input);
//   return tokens.text.length;
// }
// getTokens("ddd")


export function getChatTokensNum(str:string) {
    /**
     * the complete default: gpt-3.5-turbo-0301
     * if you want to use others, please the function named getTokensNum
     */
    const enc_chat = encoding_for_model("gpt-3.5-turbo-0301");
    const tokenNum =  enc_chat.encode(str).length;

    enc_chat.free();

    console.log(tokenNum)
    return tokenNum
}

 export function fff()
 {
   const token =  getChatTokensNum("this is a test")
   console.log(token)
   return(token)
 }
