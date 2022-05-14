import Head from 'next/head'

const Meta = ({title,description,keywords}) => {
  return (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charset='utf-8' />
        <link rel='icon' href='/favicon/ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title:'Konvensyen Keselamatan Perlindungan',
    keywords:'Konvensyen, Keselamatan Perlindungan, Pejabat Ketua Pegawai Keselamatan Kerajaan Malaysia, CGSO, Rahsiakan Rahsia Negara, Jabatan Perdana Menteri',
    description:'Konvensyen Keselamatan Perlindungan anjuran Pejabat Ketua Pegawai Keselamatan Kerajaan Malaysia (CGSO), Jabatan Perdana Menteri'
}

export default Meta