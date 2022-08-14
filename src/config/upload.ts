import multer from "multer";  //lib de upaload files

export const storageConfig = multer.diskStorage({      //configuração local da image e name
  destination: (req, file, cd) => {
    cd(null, './tmp')
  },
  filename: (req, file, cd) => {
    let randomName = Math.floor(Math.random() * 9999999);
    cd(null, `${randomName+Date.now()}.jpg`);
  }
});

export const upload = multer({                       //função para botar frente router de onde quer receber image
  storage: storageConfig,
  fileFilter: (req, file, cb) => {                   // filtro do que deve ser recebido
    const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
    if(allowed.includes( file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fieldSize: 5242880 }  //tamanha da imagem em bytes 
});

