import axios from 'axios';

export async function get(url: string) {
  return new Promise((success, error) => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:3000/meals');
        success(res.data);
      } catch (err) {
        error(err);
      }
    })();
  });
}