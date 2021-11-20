// ========== Puerto ========== //
process.env.PORT = process.env.PORT || 4040;

// ========== Conexión a Datos ========== //
configBD = {
    host: '192.168.1.31',
    user: 'root',
    password: 'root2021',
    database: 'gtpe',
    port: 3306
};

// ========== Tiempo expiración token ========== //
process.env.CADUCIDAD_TOKEN = 8 * 60 * 60 * 1000;

// ========== SEED para encriptar contraseña ========== //
process.env.SEED = '53m1ll4T0k3n';

// ========== Códigos de respuesta de los servicios solicitados ========== //
codRespuesta = {
    exito: 'AV200',
    noDatos: 'AV201',
    error: 'AV400'
};

// ========== Leyenda para mostrar el error hacia el usuario ========== //
detErr = 'Ocurrió un error (';
detErrC = ')';

// ========== Rutas ========== //
archPDF = 'C:/ConciliaPDFs/';
archMovs = 'C:/ArchivosMovimientos/';
archCodQR = 'C:/ArchivosQR/';
logDir = './logFiles';