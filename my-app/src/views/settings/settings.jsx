import React, { Fragment, Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tittle from '../../components/titles/index';
import Modal from '../../components/modal';
import ModalClean from '../../components/cleanmodal/index';
import './settings.css';
import UserTabs from './settingsUser/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index';
import CreateUser from '../../components/CreateUser/createUser';

class Settings extends Component {
    constructor (){
        super ()
        this.state = {open:false} 
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }
    closeModal (){
        this.setState({open:false})
    }
    openModal (){
        this.setState({open:true})
    }

    componentWillUnmount(){
        this.props.setToOpen();
    }

    render() {

        const { open } = this.state;
        const {modalOpen, closeModal, handleSide, menu} = this.props
        const displayTabsSettings = (
            <Tabs>
                <TabList>
                    <Tab>Usuarios</Tab>
                    <Tab>Menú</Tab>
                    <Tab>Ayuda</Tab>
                </TabList>
                <TabPanel>
                    <UserTabs openModal={this.openModal}/>
                </TabPanel>
                <TabPanel>
                    <h2>No hay menú agregado aún</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Ayuda en construcción</h2>
                </TabPanel>
            </Tabs>
        )
        return (
            <Fragment>
                <div className="wrapper">
                    <Modal open={modalOpen} close={closeModal} />
                    <ModalClean open = {this.state.open} close = {this.closeModal} title="Crear usuario" footer={<EntryButton text="Guardar"/>} content={<CreateUser/>}/>
                    {menu}
                    <main className="main">
                        <Tittle color="#303F9F" text="Configuración" icon={<i className="material-icons icon">settings_applications</i>} />
                        {displayTabsSettings}
                    </main>
                </div>
            </Fragment>
        )
    }
}

export default Settings;
