// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { encoding_for_model} from "@dqbd/tiktoken"
console.log(encoding_for_model("gpt-3.5-turbo-0301").encode("hello world"))
declare global {
	namespace App {
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
