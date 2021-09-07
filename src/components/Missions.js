import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions } from '../store/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'    '}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((mission) => (
            <tr key={mission.id}>
              <td>
                <p className="fw-bold">{mission.mission_name}</p>
              </td>
              <td>
                <p>{mission.description}</p>
              </td>
              <td className="align-middle">
                <Badge bg="success">Active member</Badge>
              </td>
              <td className="col-2 align-middle text-center">
                <Button variant="outline-danger">Leave Mission</Button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
