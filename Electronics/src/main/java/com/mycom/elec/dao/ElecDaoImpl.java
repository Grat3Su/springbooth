package com.mycom.elec.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

import com.mycom.elec.common.DBManager;
import com.mycom.elec.dto.ElecDto;
@Repository
public class ElecDaoImpl implements ElecDao{

private final DataSource dataSource;
	
	public ElecDaoImpl(DataSource datasource) {
		this.dataSource = datasource;
	}

	@Override
	public ElecDto elecDetail(String elecCode) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ElecDto dto = null;			
		
		try {
			con = dataSource.getConnection();
			
			StringBuilder sb = new StringBuilder();
			//-> elec sql
			sb.append("select* from electronics where electronicsCode = ?");
			
			pstmt = con.prepareStatement(sb.toString());
			pstmt .setString(1, elecCode);
			
			rs = pstmt.executeQuery();
			if(rs.next()) {
				dto = new ElecDto();
				dto.setElecCode(rs.getString("electronicsCode"));
				dto.setModel(rs.getString("model"));
				dto.setType(rs.getString("type"));
				dto.setPrice(rs.getInt("price"));
				dto.setCompany(rs.getString("company"));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.releaseConnection(rs, pstmt, con);
		}
		return dto;
	}

	@Override
	public List<ElecDto> elecList() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		List<ElecDto> list = new ArrayList<ElecDto>();
		
		try {
			con = dataSource.getConnection();
			
			StringBuilder sb = new StringBuilder();
			sb.append("select * ");
			sb.append("from electronics");
			
			pstmt = con.prepareStatement(sb.toString());
			
			rs = pstmt.executeQuery();
			while(rs.next()) {
				ElecDto dto = new ElecDto();
				dto = new ElecDto();
				dto = new ElecDto();
				dto.setElecCode(rs.getString("electronicsCode"));
				dto.setModel(rs.getString("model"));
				dto.setType(rs.getString("type"));
				dto.setPrice(rs.getInt("price"));
				dto.setCompany(rs.getString("company"));
				list.add(dto);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.releaseConnection(rs, pstmt, con);
		}
		return list;
	}

	@Override
	public int elecInsert(ElecDto dto) {

		Connection con = null;
		PreparedStatement pstmt = null;
		int ret = -1;
		
		try {
			con = dataSource.getConnection();
			
			StringBuilder sb = new StringBuilder();
			sb.append("insert into electronics( electronicsCode, model, type, price, company) ");
			sb.append(" values(?, ?, ?, ?, ?)");
			
			pstmt = con.prepareStatement(sb.toString());
			pstmt .setString(1, dto.getElecCode());
			pstmt .setString(2, dto.getModel());
			pstmt .setString(3, dto.getType());
			pstmt .setInt(4, dto.getPrice());
			pstmt .setString(5, dto.getCompany());
			
			ret = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.releaseConnection(pstmt, con);
		}
		return ret;
	}

	@Override
	public int elecUpdate(ElecDto dto) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int ret = -1;
		
		try {
			con = dataSource.getConnection();
			
			StringBuilder sb = new StringBuilder();
			sb.append("update emp set model = ?, type = ?, price = ?, company = ? ");
			sb.append(" where electronicsCode = ?");
			
			pstmt = con.prepareStatement(sb.toString());
			pstmt .setString(1, dto.getModel());
			pstmt .setString(2, dto.getType());
			pstmt .setInt(3, dto.getPrice());
			pstmt .setString(4, dto.getCompany());
			pstmt .setString(5, dto.getElecCode());
			
			ret = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.releaseConnection(pstmt, con);
		}
		return ret;
	}

	@Override
	public int elecDelete(String elecCode) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int ret = -1;
		
		try {
			con = dataSource.getConnection();
			
			StringBuilder sb = new StringBuilder();
			sb.append("delete from electronics");
			sb.append(" where electronicsCode = ?");
			
			pstmt = con.prepareStatement(sb.toString());
			pstmt.setString(1, elecCode);
			
			ret = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.releaseConnection(pstmt, con);
		}
		return ret;
	}

}
