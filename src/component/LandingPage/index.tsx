import React, { FC } from 'react'
import Button from '../Button/Button'
import ViewListIcon from '@material-ui/icons/ViewList';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import './style.css'
import Card from "../Card/Card";

const LandingPage: FC = (props: any) => {
    return (
        <div className={'landingContainer'}>
            <Card title={"Product"}>
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<ViewListIcon />}
                    label={"View Products"}
                    onClick={() => props.history.push('/list')}
                    align={'center'}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<NoteAddIcon />}
                    label={"Add Products"}
                    onClick={() => props.history.push('/list/new')}
                    align={'center'}
                />
            </Card>
        </div>
    )
}

export default LandingPage;
