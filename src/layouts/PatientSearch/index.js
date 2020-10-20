import React, { Component } from 'react';
import Router from 'next/router';
import throttle from 'lodash/throttle';
import { AutoComplete, Input } from 'antd';
import messageApi from 'frontend/api/message.api';
import { patientFilter } from 'frontend/utils/filter';

class PatientSearch extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      search: '',
      patients: []
    };

    this.throttledSearch = throttle(this.search, 300);
  }

  search = async value => {
    this.setState({ loading: true, patients: [] });

    const resp = await messageApi.getContacts({
      skip: 0,
      limit: 5,
      keyword: 'dashboard',
      filterBy: patientFilter({ name: [value] })
    });

    if (resp.ok) {
      this.setState({
        patients: (resp.data.patients || []).map(p => ({
          key: p.uuid,
          uuid: p.uuid,
          value: p.name,
          label: p.name
        }))
      });
    }

    this.setState({ loading: false });
  };

  onSearch = v => {
    this.setState({ search: v });
    this.throttledSearch((v || '').trim());
  };

  onSelect = v => {
    const { patients } = this.state;

    const patient = patients.find(p => p.value === v);

    if (patient) {
      Router.push({
        pathname: '/patients/profile',
        query: { uuid: patient.uuid }
      });
    }
  };

  handleAllResult = () => {
    const { search } = this.state;
    Router.push({
      pathname: '/patients',
      query: {
        orderBy: 'priority',
        sort: 'descend',
        page: 1,
        tab: 'all',
        filterBy: btoa(
          JSON.stringify({
            name: [search]
          })
        )
      }
    });
  };

  render() {
    const { loading, patients, search } = this.state;

    const options = [...patients];

    if (search) {
      options.push({
        label: (
          <a
            onClick={this.handleAllResult}
            className="header-notification__show-all"
          >
            Show All Results
          </a>
        ),
        options: []
      });
    }

    return (
      <div className="header-notification__container">
        <AutoComplete
          options={options}
          className="header-notification__search"
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          notFoundContent="No Result"
        >
          <Input.Search loading={loading} placeholder="Search Patients" />
        </AutoComplete>
      </div>
    );
  }
}

export default PatientSearch;
