import nf from '../Service/firebase'
import { getDocs, collection } from "firebase/firestore";

export async function searchProductos() {
  const col = collection(nf, "productos");
  try {
    const data = await getDocs(col);
    const result = data.docs.map(
      (doc) => (doc = { id: doc.id, ...doc.data() })
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}