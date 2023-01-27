import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { selectClients } from '../features/clients/clientSlice';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

const TableList = () => {
    const clients = useSelector(selectClients);

    return (
        <Container maxWidth='lg'>
            <Button variant='contained' color='primary'>
                CSV
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Lastname</TableCell>
                            <TableCell align='right'>Age</TableCell>
                            <TableCell align='right'>Gender</TableCell>
                            <TableCell align='left'>Email</TableCell>
                            <TableCell align='right'>Nationality</TableCell>
                            <TableCell align='right'>Picture</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            '&:last-child td, &:last-child th': {},
                        }}
                    >
                        {clients &&
                            clients.map((client) => (
                                <TableRow
                                    key={client.email}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component='th' scope='row'>
                                        {client.name.first}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {client.name.last}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {client.dob.age}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {client.gender}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {client.email}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {client.nat}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <img
                                            src={client.picture.thumbnail}
                                            alt='client'
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TableList;
