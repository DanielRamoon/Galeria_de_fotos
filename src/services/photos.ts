import { Photo } from '../types/photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import {v4 as createId } from 'uuid'

// função que ler as fotos 
export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "image");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}
// função que envia as fotos 

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png']) {

        let randomName = createId(); // criar um nome aleatorio 
        let newfile = ref(storage, `image/${randomName}`); //proceso de uploading

        let upload = await uploadBytes(newfile,file)
        let photoUrl = await getDownloadURL(upload.ref);
        
        return {name: upload.ref.name, url: photoUrl} as Photo

    }else {
        return new Error(('Tipo de arquivo não permitido'));
        
    }
}
