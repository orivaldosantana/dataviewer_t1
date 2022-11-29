import { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard.jsx'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import axios from 'axios'
import {
  Box,
  Typography
} from '@mui/material';

export default function Classes() {
  const [ classes, setClasses ] = useState([]);

  useEffect(() => {
    async function getClasses() {
      const response = await axios.get(
        `http://localhost:3000/api/tests/db_classes`
      );

      const responseData = await response.data;

      setClasses(responseData);
    }

    getClasses();
  }, []);

  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      <Box className={styles.maincard}>
        <Typography
          variant='h2'
          sx={{
            margin: "0 0 1rem 0",
            fontSize: "1.5rem",
            fontWeight: 700
          }}
        >
          Turmas
        </Typography>
        <Box className={styles.containerclasses}>
          {
            classes.map(classe => (
              <Link href={`/classes/${classe.id_class}`} key={classe.id_class}>
                <a>
                  <ClassCard title={classe.name} year={classe.year} semester={classe.semester} />
                </a>
              </Link>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}